import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { FC, Fragment, ReactNode } from "react";
import Button from "./button.component";

interface IModal {
  show?: boolean;
  onSave?: () => void;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  buttonLoading?: boolean;
  saveText?: string;
  closeText?: string;
}

const Modal: FC<IModal> = ({
  show = false,
  onSave,
  onClose,
  title,
  children,
  buttonLoading = false,
  saveText = "Submit",
  closeText = "Close",
}) => {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition
          show={show}
          enter="transition-opacity ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition
              show={show}
              enter="transition ease-out duration-300 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-200 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="modal-box  max-h-full overflow-visible ">
                {title && (
                  <DialogTitle as="h3" className="text-3xl font-bold m-4">
                    {title}
                  </DialogTitle>
                )}
                <div className="min-h-32">{children}</div>
                <div className="mt-4 flex gap-3 justify-end">
                  <Button outline onClick={onClose}>
                    {closeText}
                  </Button>
                  <Button onClick={onSave} loading={buttonLoading}>
                    {saveText}
                  </Button>
                </div>
              </DialogPanel>
            </Transition>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
