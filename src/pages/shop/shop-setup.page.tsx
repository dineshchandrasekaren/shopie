import { FC, useEffect, useState } from "react";
import ImageUploader from "../../components/common/image-upload.component";
import UnderLineInput, {
  IUnderLineInputCommon,
} from "../../components/common/underline-input.component";
import Button from "../../components/common/button.component";
import useSession from "../../hooks/useSession";
import { useNavigate } from "react-router-dom";
import { IShopDetails } from "../../types/user.type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { saveShopDetails } from "../../redux/thunk-action/user.thunk-action";
import { Alert } from "../../assets/Icons";

const ShopSetUp: FC = () => {
  const { getSession, setSessionValue } = useSession();

  const { setup = false, name = "" } = getSession();

  const [shopDetails, setShopDetails] = useState<IShopDetails>({
    logo: null,
    slug: "",
    about: "",
    name,
  });
  console.log(shopDetails);
  const { loading, message } = useSelector(
    (state: RootState) => state.userReducer
  );
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (setup) {
      navigate("/shop");
    }
  }, [setup, navigate]);

  const handleLogoChange = (logo: FormDataEntryValue | null) => {
    setShopDetails((preV) => ({ ...preV, logo }));
  };
  const handleChange: IUnderLineInputCommon["onChange"] = (event) => {
    const { name = "", value = "" } = event.target;

    setShopDetails((preV) => ({ ...preV, [name]: value }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(saveShopDetails(shopDetails)).then((response) => {
      if (response.payload.success) {
        navigate("/shop");
        setSessionValue("setup", true);
      }
    });
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[var(--sky)] text-customblue  text-lg  ">
      <div className="flex flex-col gap-7 max-w-400 w-full pt-16 mx-auto p-10 font-semibold">
        <ImageUploader onChange={handleLogoChange} btnTxt="logo" />
        <div>
          We’re happy to introduce{" "}
          <UnderLineInput
            name="name"
            placeholder="Shop name"
            onChange={handleChange}
            value={shopDetails.name}
          />
          —your new place for finding stylish, unique items.
          <div className="mt-2">
            Our motto is
            <UnderLineInput
              name="slug"
              placeholder="Slug"
              textarea
              onChange={handleChange}
              value={shopDetails.slug}
            />
          </div>
        </div>
        <div>
          <UnderLineInput
            name="about"
            placeholder="About Shop"
            textarea
            onChange={handleChange}
            value={shopDetails.about}
          />
        </div>

        {message ? (
          <div role="alert" className="flex gap-2 text-red-700">
            <Alert />
            <span>{message}</span>
          </div>
        ) : (
          ""
        )}
        <Button onClick={handleClick} loading={loading}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ShopSetUp;
