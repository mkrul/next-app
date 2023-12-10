"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { set } from "zod";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={270} alt="a dog" />
      )}
      <CldUploadWidget
        uploadPreset="nfanvh6g"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") {
            return;
          }
          const info = result.info as CloudinaryResult;
          console.log(result);
          console.log(info);
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
