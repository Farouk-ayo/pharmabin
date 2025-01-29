"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/buttons";
import Image from "next/image";
import imageCompression from "browser-image-compression";

const AddArticle: React.FC = () => {
  const [formData, setFormData] = useState({
    Title: "",
    caption: "",
    subtitle1: "",
    content1: "",
    subtitle2: "",
    content2: "",
    subtitle3: "",
    content3: "",
    subtitle4: "",
    content4: "",
    images: [null, null, null, null] as (File | null)[],
  });

  const [previewUrls, setPreviewUrls] = useState<(string | null)[]>(
    Array(4).fill(null)
  );

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => url && URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleImageChange = async (file: File, index: number) => {
    const previewUrl = URL.createObjectURL(file);
    const newPreviewUrls = [...previewUrls];
    newPreviewUrls[index] = previewUrl;
    setPreviewUrls(newPreviewUrls);

    // Compress in background
    const compressedFile = await imageCompression(file, {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    });

    // Update form data with compressed file
    const newImages = [...formData.images];
    newImages[index] = compressedFile;
    setFormData((prev) => ({ ...prev, images: newImages }));

    // Update preview with compressed version
    const compressedPreviewUrl = URL.createObjectURL(compressedFile);
    newPreviewUrls[index] = compressedPreviewUrl;
    setPreviewUrls([...newPreviewUrls]);

    // Revoke original preview URL
    URL.revokeObjectURL(previewUrl);
  };

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    if (index !== undefined) {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        if (!file.type.startsWith("image/")) {
          alert("Please upload an image file");
          return;
        }
        handleImageChange(file, index);
      }
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Article:", formData);
  };

  return (
    <div className="mx-auto p-4 md:p-6 bg-gray-50 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-primary font-semibold text-lg">Add Article</h2>
          <Button
            type="submit"
            className="bg-primaryDark text-white w-40 py-2 rounded-lg"
          >
            Add
          </Button>
        </div>

        {/* Upload Section */}
        <div className="border-2 border-dashed border-gray-300 bg-white rounded-lg h-96 w-full relative text-center">
          <label className="cursor-pointer flex flex-col items-center relative h-full w-full">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleChange(e, 0)}
            />

            {/* Display uploaded image */}
            {previewUrls[0] ? (
              <Image
                src={previewUrls[0]}
                alt="Uploaded file"
                layout="fill"
                objectFit="cover"
                className=" backdrop-brightness-0"
              />
            ) : null}

            {formData.images[0] ? (
              <div className="w-full h-full relative z-30 flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center w-full h-full"></div>
                <div className="w-20 h-20 relative z-30 flex items-center justify-center">
                  <Image
                    src={"/camera.svg"}
                    alt="Camera Icon"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col absolute inset-0  items-center justify-center bg-white  rounded-full">
                <div className="w-20 h-20 rounded-full  flex items-center justify-center text-white bg-primary text-6xl ">
                  +
                </div>
                <p className="mt-2 text-sm text-center text-gray-600">
                  Click here to upload a file or drag it in
                </p>
              </div>
            )}
          </label>
        </div>

        {/* Input Fields */}
        <div className="grid  mt-5">
          <label className="block  mt-4  text-sm font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={formData.Title}
            onChange={handleChange}
            className="w-full p-2  mt-1 border rounded-md"
          />

          <label className="block  mt-4  text-sm font-semibold text-gray-700">
            Caption
          </label>
          <input
            type="text"
            name="caption"
            placeholder="Enter small caption on the website"
            value={formData.caption}
            onChange={handleChange}
            className="w-full p-2  mt-1 border rounded-md"
          />

          <label className="block  mt-4  text-sm font-semibold text-gray-700">
            Subtitle 1
          </label>
          <input
            type="text"
            name="subtitle1"
            placeholder="Enter subtitle 1"
            value={formData.subtitle1}
            onChange={handleChange}
            className="w-full p-2  mt-1 border rounded-md"
          />
          <label className="block  mt-4  text-sm font-semibold text-gray-700">
            Content 1
          </label>
          <textarea
            rows={3}
            name="content1"
            placeholder="Enter content 1"
            value={formData.content1}
            onChange={handleChange}
            className="w-full p-2  mt-1 border rounded-md"
          />

          <label className="block  mt-4  text-sm font-semibold text-gray-700">
            Subtitle 2
          </label>
          <input
            type="text"
            name="subtitle2"
            placeholder="Enter subtitle 2"
            value={formData.subtitle2}
            onChange={handleChange}
            className="w-full p-2  mt-1 border rounded-md"
          />
          <label className="block  mt-4  text-sm font-semibold text-gray-700">
            Content 2
          </label>
          <textarea
            rows={3}
            name="content2"
            placeholder="Enter content 2"
            value={formData.content2}
            onChange={handleChange}
            className="w-full p-2  mt-1 border rounded-md"
          />

          <label className="block  mt-4  text-sm font-semibold text-gray-700">
            Subtitle 3 (Optional)
          </label>
          <input
            type="text"
            name="subtitle3"
            placeholder="Enter subtitle 3"
            value={formData.subtitle3}
            onChange={handleChange}
            className="w-full p-2  mt-1 border rounded-md"
          />
          <label className="block  mt-4  text-sm font-semibold text-gray-700">
            Content 3 (Optional)
          </label>
          <textarea
            rows={3}
            name="content3"
            placeholder="Enter content 3"
            value={formData.content3}
            onChange={handleChange}
            className="w-full p-2  mt-1 border rounded-md"
          />

          <label className="block  mt-4  text-sm font-semibold text-gray-700">
            Subtitle 4 (Optional)
          </label>
          <input
            type="text"
            name="subtitle4"
            placeholder="Enter subtitle 4"
            value={formData.subtitle4}
            onChange={handleChange}
            className="w-full p-2  mt-1 border rounded-md"
          />
          <label className="block  mt-4  text-sm font-semibold text-gray-700">
            Content 4 (Optional)
          </label>
          <textarea
            rows={3}
            name="content4"
            placeholder="Enter content 4"
            value={formData.content4}
            onChange={handleChange}
            className="w-full p-2  mt-1 border rounded-md"
          />
        </div>

        <div className="grid grid-cols-4 gap-6 mt-6">
          {formData.images.map((image, index) => (
            <label
              key={index}
              className="cursor-pointer flex flex-col items-center"
            >
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleChange(e, index)}
              />

              <div className="relative w-40 h-40 rounded-full border-2 border-dashed border-gray-400 bg-gray-200 flex items-center justify-center overflow-hidden">
                {previewUrls[0] ? (
                  <Image
                    src={previewUrls[index] || "/"}
                    alt={` `}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : null}

                {image ? (
                  <div className="w-full h-full relative z-30 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center w-full h-full"></div>
                    <div className="w-10 h-10 relative z-30 flex items-center justify-center">
                      <Image
                        src={"/camera.svg"}
                        alt="Camera Icon"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-600 text-2xl font-bold">
                    +
                  </div>
                )}
              </div>

              <p className="mt-2 text-sm font-semibold text-gray-700">
                Content {index + 1} Img {index >= 2 ? "(Optional)" : ""}
              </p>
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
