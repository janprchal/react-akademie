import styled from "styled-components";

// styled.button je fce ktera bere jako param
// string v backtickach ``
const Filter = styled.div`
  .c-filters {
    display: flex;
    width: 90%;
    height: 56px;
    margin: 1.4rem auto 1rem;

    border-radius: 4px;
    border: 1px solid #d4d4d4;

    background-color: #fff;
  }

  .c-filters--full-w {
    width: 100%;
  }

  /* Prasarna, ale tak */
  .c-filters--two .c-filters__button {
    flex: 0 0 50%;
  }

  .c-filters__button {
    flex: 0 0 33.333%;

    position: relative;

    display: flex;

    align-items: center;
    justify-content: center;
    text-align: center;

    border-right: 1px solid #d4d4d4;

    &:last-child {
      border-right: 0;
    }
  }

  .c-filters__label {
    position: absolute;

    width: 100%;

    left: 0;

    color: #000;

    background-color: transparent;
  }

  .c-filters__input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    visibility: hidden;
    width: 1px;
    height: 1px;
  }

  .c-filters__indicator {
  }

  .c-filters__input:checked + .c-filters__label {
    color: #fff;
  }

  .c-filters__input:checked + .c-filters__label + .c-filters__indicator {
    width: 100%;
    height: 100%;
    background-color: #0839a2;
  }

  .c-filters__button:first-child {
    .c-filters__indicator {
      border-radius: 4px 0 0 4px;
    }
  }

  .c-filters__button:last-child {
    .c-filters__indicator {
      border-radius: 0 4px 4px 0;
    }
  }
`;

export default Filter;
