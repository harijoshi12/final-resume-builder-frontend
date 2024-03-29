import { useEffect, useRef } from "react";

const HocForm = (Form) => {
  const NewForm = (props) => {
    const emailRef = useRef(null);
    const password1Ref = useRef(null);
    const password2Ref = useRef(null);
    useEffect(() => {
      const inputs = [emailRef, password1Ref, password2Ref];

      inputs.forEach((input) => {
        if (input.current) {
          const label = input.current.nextElementSibling.firstElementChild;

          // if data already filled
          function onDataFill() {
            if (input.current.value !== "") {
              label.style.transform = `translateY(-25px)`;
              label.style.fontSize = `13px`;
              label.style.color = `blue`;
            }
          }
          onDataFill();

          // on focus
          input.current.addEventListener("focus", () => {
            label.style.transform = `translateY(-25px)`;
            label.style.fontSize = `13px`;
            label.style.color = `blue`;
          });

          // on blur
          input.current.addEventListener("blur", () => {
            if (input?.current?.value !== "") {
              label.style.transform = `translateY(-25px)`;
              label.style.fontSize = `13px`;
              label.style.color = `blue`;
            } else {
              label.style.transform = `translateY(-50%)`;
              label.style.fontSize = `16px`;
              label.style.color = "black";
            }
          });
        }
      });
    });
    return (
      <Form
        {...props}
        emailRef={emailRef}
        password1Ref={password1Ref}
        password2Ref={password2Ref}
      />
    );
  };
  return NewForm;
};

export default HocForm;
