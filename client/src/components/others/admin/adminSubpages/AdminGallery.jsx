import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  addServerErrorMessage,
  addServerSuccessMessage,
} from "../../../../reduxStore/actions/actionAlertsMessages";

import "./AdminGallery.scss";

import { adminGalleryButtons } from "./AdminGalleryButtons";

import { fetchGalleryImgs } from "../../../../reduxStore/actions/actionFetchGalleryImages";

import useValidationGalleryFormik from "../adminCustomHooks/useValidationGalleryFormik";
import useDeleteErrorMessage from "../../../../customHooks/useDeleteErrorMessage";
import useHandleGalleryImage from "../adminCustomHooks/useHandleGalleryImage";
import useFirebseDeleteFile from "../../../../customHooks/useFirebaseDeleteFile";
import ErrorSuccessMessage from "../../errorSuccessMessages/ErrorSuccessMessages";
import ProgressBar from "../../progreeBar/ProgressBar";

import MessagePopup from "../adminPopUpMessage/MessagePopup";

import AdminGalleryImageRow from "./AdminGalleryImageRow";

import { addImageGallery } from "../../../../utils/sessions";

import useRemoveGalleryImage from "../adminCustomHooks/useRemoveGalleryImage";

const AdminGallery = () => {
  const { initialValues, validationSchema } = useValidationGalleryFormik();
  useDeleteErrorMessage();
  const { handleFile } = useHandleGalleryImage();

  const dispatch = useDispatch();
  const dataAlert = useSelector((store) => store.alertData);
  const dataFile = useSelector((store) => store.fileDate);
  const dataImages = useSelector((store) => store.galleryImgData);
  const { images } = dataImages;
  const [chooseButton, setChooseButton] = useState("men");
  const [currentImages, setCurrentImages] = useState([]);
  const [idImage, setImage] = useState("");
  const [indexButton, setIndexButton] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [nameFile, setNameFile] = useState(null);

  const imgLink = useRef(null);
  const imgUrl = useRef(null);

  console.log(imgLink, " to jest admin gallery link");

  useFirebseDeleteFile(imgLink);

  const { handleRemoveItem } = useRemoveGalleryImage(
    currentImages,
    idImage,
    imgUrl,
    setCurrentImages,
    setIsOpenModal
  );

  const onSubmit = async (values, submitProps) => {
    delete values.fileImg;

    if (Boolean(imgLink.current)) {
      values.imageUrl = imgLink.current;
      values.type = chooseButton;
    }

    console.log(values, " admin gallery");

    const { data, status } = await addImageGallery(values);

    delete data.image.__v;

    console.log(data, status, "gallery submit");

    if (status !== 200) {
      dispatch(addServerErrorMessage(data.alert, "default"));
      setNameFile(null);
      setChooseButton(null);
    } else {
      dispatch(addServerSuccessMessage(data.success, "default"));
      setNameFile(null);
      setCurrentImages([...currentImages, data.image]);
    }
    imgLink.current = null;
    submitProps.resetForm();
  };

  //   TODO: HandleChooseImages

  const handleChooseImages = (e, index) => {
    setIndexButton(index);
    const nameBtn = e.target.innerHTML;
    setChooseButton(nameBtn.toLowerCase());
  };

  //   TODO: HandleChooseImages

  const handleNotRemoveItem = () => {
    setIsOpenModal(false);
    setImage("");
  };

  useEffect(() => {
    if (Boolean(dataFile.fileImageGallery)) {
      setNameFile(dataFile.fileImageGallery.name);
    }
  }, [dataFile]);

  useEffect(() => {
    dispatch(fetchGalleryImgs(chooseButton));
  }, [chooseButton, dispatch]);

  useEffect(() => {
    setCurrentImages(images);
  }, [images]);

  const inputFile = ({ setFieldValue, setFieldTouched }) => (
    <input
      type="file"
      onChange={(e) => handleFile(e, setFieldValue, setFieldTouched)}
      className="admin-gallery__input-file"
    />
  );

  const errorMsg = (props) => {
    return <p className="admin-gallery__error-msg">{props.children}</p>;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <article className="admin-gallery">
            <div className="admin-gallery__wrapper">
              <div className="admin-gallery__wrapper-buttons">
                {adminGalleryButtons.map((item, index) => (
                  <button
                    className={
                      indexButton === index
                        ? `${item.activeNameClass} ${item.nameClass}`
                        : item.nameClass
                    }
                    key={index}
                    onClick={(e) => handleChooseImages(e, index)}
                  >
                    {item.nameTxt}
                  </button>
                ))}
              </div>
              {Boolean(dataFile.fileImageGallery) && (
                <ProgressBar imgLink={imgLink} />
              )}
              {!Boolean(Object.keys(formik.errors).length) &&
              dataAlert.errorServerMsg ? (
                <ErrorSuccessMessage />
              ) : (
                <ErrorSuccessMessage />
              )}
              {currentImages.length < 6 && (
                <Form
                  className="admin-gallery__wrapper-form-add"
                  onSubmit={formik.handleSubmit}
                >
                  <ErrorMessage name="fileImg" component={errorMsg} />
                  <div className="admin-gallery__input-file-add">
                    <label className="admin-gallery__label-file">
                      Choose File
                      <Field
                        as={inputFile}
                        name="fileImg"
                        type="file"
                        setFieldValue={formik.setFieldValue}
                        setFieldTouched={formik.setFieldTouched}
                      ></Field>
                    </label>
                    {nameFile ? (
                      <span className="admin-gallery__file-name">
                        {nameFile}
                      </span>
                    ) : (
                      <span className="admin-gallery__file-name">
                        No file ...
                      </span>
                    )}
                  </div>
                  <ErrorMessage name="title" component={errorMsg} />

                  <Field
                    type="text"
                    name="title"
                    className="admin-gallery__form-input"
                    placeholder="Title"
                  />
                  <button
                    className="admin-gallery__button-add-image"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Add Image
                  </button>
                </Form>
              )}
              <div className="admin-gallery__header">
                <p className="admin-gallery__number">
                  Total number: {currentImages.length}
                </p>
                <p className="admin-gallery__action">Action</p>
              </div>
              <div className="admin-gallery__wrapper-images">
                {currentImages.map((item, index) => (
                  <AdminGalleryImageRow
                    key={item._id}
                    {...item}
                    setImage={setImage}
                    idImage={idImage}
                    imgUrl={imgUrl}
                    setIsOpenModal={setIsOpenModal}
                    currentImages={currentImages}
                    setCurrentImages={setCurrentImages}
                  />
                ))}
              </div>
            </div>
            <MessagePopup
              isOpenModal={isOpenModal}
              handleRemoveItem={handleRemoveItem}
              handleNotRemoveItem={handleNotRemoveItem}
            />
          </article>
        );
      }}
    </Formik>
  );
};

export default AdminGallery;