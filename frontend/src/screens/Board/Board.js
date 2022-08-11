import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import MainScreen from "../../components/MainScreen";
import { Card, Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction, listPosts } from "../../actions/boardActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function Board() {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postDelete = useSelector((state) => state.postDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = postDelete;

  const postCreate = useSelector((state) => state.postCreate);
  const { success: successCreate } = postCreate;

  const postUpdate = useSelector((state) => state.postUpdate);
  const { success: successUpdate } = postUpdate;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch, userInfo, successDelete, successCreate, successUpdate]);

  const deleteHandler = (id) => {
    if (window.confirm("정말 삭제 하시겠습니까?")) {
      dispatch(deletePostAction(id));
    }
  };
  return (
    <MainScreen title="정보 나눔 게시판" style={{ overFlow: "hidden" }}>
      {console.log(posts)}
      <Link to="/createPost">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          새로운 정보 게시하기
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      {posts && (
        <Container style={{ display: "flex" }}>
          {posts.map((post) => (
            <Draggable>
              <Card
                key={post._id}
                style={{
                  width: "30%",
                  maxHeight: "300px",
                  minHeight: "150px",
                  overflow: "auto",
                  textOverflow: "ellipsis",
                  whiteSpace: "no-wrap",
                }}
              >
                <Card.Body>
                  <Card.Text>{post.content}</Card.Text>
                  <Button href={`/board/${post._id}`} size="sm">
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    size="sm"
                    onClick={() => deleteHandler(post._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Draggable>
          ))}
        </Container>
      )}
    </MainScreen>
  );
}

export default Board;
