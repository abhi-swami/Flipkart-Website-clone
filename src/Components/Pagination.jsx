import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { handlePage } from "../Redux/Favorite/Search/action";
import styles from "../Styles/Pagination.module.css";

const Pagination = ({ posts }) => {
  // const posts=useSelector((store)=>store.posts);

  const { perPage, activePage } = useSelector((store) => {
    return {
      perPage: store.searchReducer.perPage,
      activePage: store.searchReducer.activePage,
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const totalPage = Math.ceil(posts / perPage);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPageFromParam = searchParams.get("page");

  const handleChange = (newPage) => {
    dispatch(handlePage(newPage));
    const params = {
      page: newPage,
    };
    setSearchParams(params);
  };
  useEffect(() => {
    if (Number(currentPageFromParam)) {
      dispatch(handlePage(currentPageFromParam));
    }
  }, []);

  const tp = new Array(totalPage).fill(0);
  const handleBtnClick = (val) => {
    handleChange(val);
  };
  const handlePrevNext = (val) => {
    handleChange(Number(activePage) + val);
  };
  return (
    <div className={styles.paginationWrapper} data-testid="paginationWrapper">
      {activePage > 1 && (
        <Button onClick={() => handlePrevNext(-1)}>Prev</Button>
      )}

      {/* render the Buttons here, directly. Ensure, each Button has the "data-testid='btn'" prop. Add the className, activeBtn, if the current Button is the activePage*/}
      {totalPage &&
        tp?.map((el, ind) => (
          <Button
            key={ind}
            className={activePage === ind + 1 ? styles.activeBtn : null}
            onClick={() => handleBtnClick(ind + 1)}
          >
            {ind + 1}
          </Button>
        ))}

      {activePage < totalPage && (
        <Button onClick={() => handlePrevNext(1)}>Next</Button>
      )}
    </div>
  );
};

export default Pagination;
