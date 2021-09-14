// import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

function DisplayChapters({ chapters, setChapters}) {
    const { chapterId } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:5000/chapters`) //?_embed=cards
            .then((response)=> response.json())
            .then(setChapters)
            .catch((error)=>{
                console.log(error);
            })
    }, [setChapters]);

    const chapterList = chapters.map((chapter) => {
        return (
            <Chapter
                id={chapter.id}
                name={chapter.name}
                totalVerses={chapter.verses}
            />
        );
    });

    function Chapter({ id, name, totalVerses }) {
        return (
            <div className="container">
                <div className="row-md-6">
                     {/* <div class="col-md-6"> */}
                        <div className="chapter-card" key={id}>
                            <div className="card-body">
                                <div className="row justify-content-between">
                                    <h5 className="card-title">Chapter {id}</h5>
                                    <p className="text">{name}</p>
                                </div>
                                <Link to={`verses/${chapterId}`}>
                                <button type="button" class="btn btn-light">{totalVerses} Verses</button>
                                </Link>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        );
    };

    // <i class="cil-book-open"></i>

    return (
    <div>
        {console.log(chapters)}
        {chapterList}
    </div>
    );
};

export default DisplayChapters;