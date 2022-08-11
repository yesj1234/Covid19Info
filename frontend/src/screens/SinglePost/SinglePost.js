import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction, updatePostAction } from "../../actions/boardActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import ReactMarkdown from "react-markdown";
function SinglePost() {
  const [content, setContent] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const postUpdate = useSelector((state) => state.postUpdate);
  const { loading, error } = postUpdate;

  const postDelete = useSelector((state) => state.postDelete);
  const { loading: loadingDelete, error: errorDelete } = postDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deletePostAction(id));
    }
    navigate("/mynotes");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/board/${id}`);

      setContent(data.content);
      setDate(data.updatedAt);
    };
    fetching();
  }, [id, date]);

  const resetHandler = () => {
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updatePostAction(id, content));
    if (!content) return;
    resetHandler();
    navigate("/board");
  };
  return (
    <MainScreen title="메모 수정하기">
      <Card>
        <Card.Header>메모 수정</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading></Loading>}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}

            <Form.Group controlId="content">
              <Form.Label>메모</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the content"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {/* {content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )} */}

            {loading && <Loading size={50} />}
            <Button variant="primary" type="submit" style={{ marginTop: 10 }}>
              수정
            </Button>
            <Button style={{ marginTop: 10}}
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(id)}
            >
              삭제
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          수정일자 - {date.substring(0, 10)}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default SinglePost;
