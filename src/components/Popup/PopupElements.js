import styled from 'styled-components'

export const PopupStyled = styled.div`
.portfolio-popup {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  overflow-y: auto;
  padding: 50px;
  backdrop-filter: blur(20px);
}
.pp-inner {
  min-height: 100vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pp-content {
  background: linear-gradient(
    to bottom right,
    var(--background-dark-green) 50%,
    var(--border-color)
  );
  opacity: 0.9;
  color: var(--white);
  padding: 30px;
  border-radius: 30px;
  max-width: 60%;
  width: 100%;
  border-top: 1px solid var(--white);
  border-left: 1px solid var(--white);
}
.pp-header {
  position: relative;
}
.pp-header .bttn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    padding: 0;
    right: -45px;
    top: -45px;
    background: var(--primary-color);
    color: var(--white);
    border-radius: 50%;
    cursor: pointer;
}
.pp-header h3 {
  font-size: 25px;
  margin: 20px 0 15px;
}
.pp-thumbnail img {
  width: 100%;
  border-radius: 10px;
}
.pp-body .description {
  margin-bottom: 20px;
  color: var(--white);
}
.pp-body .description p{
  font-size: 0.9rem;
}
.pp-body .general-info li {
  margin-bottom: 10px;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 0.9rem;
}
.pp-body .general-info li span {
  font-weight: 300;
  font-size: 0.9rem;
}

`
