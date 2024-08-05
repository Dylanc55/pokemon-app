import { useDispatch, useSelector } from "react-redux";

import Modal from "./UI/Modal";

import { setModalIsVisible } from "../store/ui";

const PokemonSearch = () => {
  const dispatch = useDispatch();

  const isModalVisible = useSelector((state) => state.ui.modalIsVisible);

  function handleCloseModal() {
    dispatch(setModalIsVisible(false));
  }

  return (
    <Modal open={isModalVisible} onClose={handleCloseModal}>
      Search
    </Modal>
  );
};

export default PokemonSearch;
