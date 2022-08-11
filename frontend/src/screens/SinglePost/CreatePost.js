import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../actions/boardActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";

function CreatePost() {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;
  console.log(note);

  const resetHandler = () => {
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPostAction(content));
    if (!content) return;

    resetHandler();
    navigate("/board");
  };
  useEffect(() => {}, []);
  return (
    <MainScreen title="함께 이겨내요">
      <Card>
        <Card.Header>간단한 정보만 게시해주세요. (300자이하)</Card.Header>
        <Card.Body >
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

            <Form.Group controlId="content" >
              <Form.Label style={{ marginLeft: 10 }}>메모남기기</Form.Label>
              <Form.Control
                style={{ fontSize: "1rem"}}
                as="textarea"
                value={content}
                placeholder="내용을 작성해주세요."
                rows={5}
                onChange={(e) => setContent(e.target.value)}
                maxLength="300"
              />
            </Form.Group>

            {loading && <Loading size={50} />}
            <Button type="submit" variant="outline-primary" style={{ marginTop: 10 }}>
              작성
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="outline-danger" style={{ marginTop: 10 }}>
              초기화
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          생성일자 - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreatePost;
