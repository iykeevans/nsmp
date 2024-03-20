"use client";

import React, { useState } from "react";
import styled from "styled-components";

import s from "./input.module.css";

interface IProps {
  height?: number;
  label: string;
  type?: string;
}

const Input = (props: IProps) => {
  const { height = 50, label, type = "text" } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputWrapper>
      {type === "text" && (
        <input
          className="input rounded-lg"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          type="text"
          placeholder=" "
          data-placeholder="E-mail"
          required
        />
      )}

      {type === "password" && (
        <input
          className="input rounded-lg"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          type={showPassword ? "text" : "password"}
          placeholder=" "
          data-placeholder="E-mail"
          required
        />
      )}

      <span className="placeholder">{label}</span>

      {type === "password" && (
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-5 top-1/2 -translate-y-1/2"
        >
          <path
            d="M9.74294 3.59232C10.1494 3.53223 10.5686 3.5 11.0004 3.5C16.1054 3.5 19.4553 8.00484 20.5807 9.78682C20.7169 10.0025 20.785 10.1103 20.8231 10.2767C20.8518 10.4016 20.8517 10.5987 20.8231 10.7236C20.7849 10.8899 20.7164 10.9985 20.5792 11.2156C20.2793 11.6901 19.8222 12.3571 19.2165 13.0805M5.72432 5.21504C3.56225 6.6817 2.09445 8.71938 1.42111 9.78528C1.28428 10.0019 1.21587 10.1102 1.17774 10.2765C1.1491 10.4014 1.14909 10.5984 1.17771 10.7234C1.21583 10.8897 1.28393 10.9975 1.42013 11.2132C2.54554 12.9952 5.89541 17.5 11.0004 17.5C13.0588 17.5 14.8319 16.7676 16.2888 15.7766M2.00042 1.5L20.0004 19.5M8.8791 8.37868C8.3362 8.92157 8.00042 9.67157 8.00042 10.5C8.00042 12.1569 9.34356 13.5 11.0004 13.5C11.8288 13.5 12.5788 13.1642 13.1217 12.6213"
            stroke="#9A9A9A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 50px;

  .input {
    height: 100%;
    font-size: 16px;
    padding: 11px 15px;
    border: 1px solid #d9d9d9;
    width: 100%;
    outline: none;
    box-sizing: border-box;
  }
  .placeholder {
    pointer-events: none;
    position: absolute;
    font-weight: 400;
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
    padding: 0 8px;
    background-color: white;
    border-radius: 5px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: #9a9a9a;
  }

  .input:not(:placeholder-shown).input:not(:focus) + .placeholder {
    transform: scale(0.75) translateY(-36px) translateX(-15%);
    color: #cbd8e3;
    transition: 0.2s ease;
  }

  .input:focus {
    border-color: #367aff;
  }

  .input:focus + .placeholder {
    transform: scale(0.75) translateY(-48px) translateX(-15%);
    color: #367aff;
    transition: 0.2s ease;
  }

  .input:invalid:not(:placeholder-shown) {
    transition: 0.2s ease;
    border-color: #f52c5c;
  }

  .input:invalid:not(:placeholder-shown) + .placeholder {
    transition: 0.2s ease;
    color: #f52c5c;
  }
  .input:invalid:not(:placeholder-shown).input:not(:focus) + .placeholder {
    transform: scale(0.75) translateY(-36px) translateX(-15%);
    color: #f52c5c;
    transition: 0.2s ease;
  }
`;
