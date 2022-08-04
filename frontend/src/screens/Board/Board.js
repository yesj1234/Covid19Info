import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import MainScreen from "../../components/MainScreen";
import { Card, Button } from "react-bootstrap";
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
    if (window.confirm("Are you sure?")) {
      dispatch(deletePostAction(id));
    }
  };
  return (
    <MainScreen title="Welcome to The Board" style={{ overFlow: "hidden" }}>
      {console.log(posts)}
      <Link to="/createPost">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Draggable Post
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      {posts &&
        posts.map((post) => (
          <Draggable key={post._id}>
            <Card style={{ width: "30%" }}>
              <Card.Body>
                <Card.Text>{post.content}</Card.Text>
                <Button href={`/board/${post._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(post._id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Draggable>
        ))}
    </MainScreen>
  );
}

export default Board;
