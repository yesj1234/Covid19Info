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
    <MainScreen title="함께 이겨내요" style={{ overFlow: "hidden" }}>
      <p style={{ marginLeft: 10, color: "gray" }}>코로나를 이겨낼 수 있는 팁이 있다면 공유해주세요.</p>
      {console.log(posts)}
      <Link to="/createPost">
        <Button style={{width:"20%", marginLeft: 10, marginBottom: 6 }} size="lg">
          메모 남기기
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
        <div style={{ display: "flex", flexWrap:"wrap"}}>
          {posts &&
            posts.map((post) => (
              <Draggable  key={post._id}>
              <Card style={{ display:"flex", width: "25%", marginRight:20, marginTop: 20, backgroundColor: "beige", border: "none", borderRadius: 10 }}>
                <Card.Body>
                  <Card.Text  style={{ fontSize:17, height:150 }}>{post.content}</Card.Text>
                  <Button variant="light" href={`/board/${post._id}`} >수정</Button>
                  <Button
                    
                    variant="light"
                    className="mx-2"
                    onClick={() => deleteHandler(post._id)}
                  >
                    삭제
                  </Button>
                </Card.Body>
              </Card>
            </Draggable>
          ))}        
        </div>
        
    </MainScreen>
  );
}

export default Board;
