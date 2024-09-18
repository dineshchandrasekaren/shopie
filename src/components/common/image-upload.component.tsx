import { useState } from "react";
import { Uploader } from "../../assets/Icons";
const ImageUploader = ({
  btnTxt,
  onChange,
}: {
  btnTxt?: string;
  onChange: (file: FormDataEntryValue | null) => void;
}) => {
  const [avatar, setAvatar] = useState<string | undefined>(undefined);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = event.target.files?.[0]; // Safe access to the file

    if (file) {
      const reader = new FileReader();

      // Handle file reading
      reader.onloadend = () => {
        const result = reader.result as string;
        setAvatar(result); // Update the avatar with the selected file's base64 string
      };

      // Read the file as a Data URL (for image preview purposes, etc.)
      reader.readAsDataURL(file);

      // Create FormData and append the file
      const formData = new FormData();
      formData.append("logo", file); // Appending the file to FormData safely

      console.log("Event:", event); // Logging event for debugging
      console.log("File:", file); // Logging file object for debugging
      onChange(formData.get("logo")); // Ensure onChange is passed correctly
    } else {
      console.warn("No file selected");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="avatarUploader" className="cursor-pointer">
        {/* Display avatar or default placeholder */}
        <>
          {avatar ? (
            <img
              src={avatar} // Provide a default avatar image
              alt="Avatar"
              className=""
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-transparent-black object-contain overflow-hidden flex justify-center items-center border-2 border-gray-300">
              <Uploader />
            </div>
          )}
        </>
      </label>
      <input
        id="avatarUploader"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {btnTxt ? (
        <button
          className="mt-2 text-lg font-extrabold"
          onClick={() => document.getElementById("avatarUploader")?.click()}
        >
          {avatar ? "Change" : "Add"} {btnTxt}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageUploader;
