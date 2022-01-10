
import React, { useEffect, useState } from "react";
import axios from "axios";
// import FeatureList from "./FeatureList";
import './Feature.css';
import { useParams } from "react-router";
import SwaggerTest from "./Swagger";
// import SwaggerUI from "swagger-ui-react"
// import "swagger-ui-react/swagger-ui.css"

function FeatureView({ history, location, match }) {

    const [data, setData] = useState({});
    const { id } = useParams();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
            }, 20);
            const result = await axios.get("/api/v1/features/" + id)
            setData(result.data);
        };
        fetchData();
    }, []);


    return (
        <>
            <h2 align="center">게시글 상세정보</h2>

            <div className="post-view-wrapper">
                {
                    data ? (
                        <>
                            <div className="post-view-row">
                                <label>게시글 번호</label>
                                <label>{data.id}</label>
                            </div>
                            <div className="post-view-row">
                                <label>제목</label>
                                <label>{data.name}</label>
                            </div>
                            <div className="post-view-row">
                                <label>타입</label>
                                <label>{data.feature_type ? data.feature_type.type_name : "haha"}</label>
                            </div>
                            <div className="post-view-row">
                                <label>작성일</label>
                                <label>{data.created_at}</label>
                            </div>
                            <div className="post-view-row">
                                <label>링크</label>
                                <label>{data.link}</label>
                            </div>
                            <div className="post-view-row">
                                <label>내용</label>
                                <div>
                                    {
                                        data.desc
                                    }
                                </div>
                            </div>
                        </>
                    ) : '해당 게시글을 찾을 수 없습니다.'
                }
                <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
            </div>
            {/* {data.feature_type.type_name === "MySQL" ? <SwaggerTest /> : <div>I am Happy</div>} */}

        </>
    )


}

export default FeatureView;




