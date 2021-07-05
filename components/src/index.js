import react from 'react';
import reactdom from 'react-dom';

const app = () => {
    return (
        <div className="ui container comments" >
            <div className="comment" >
                <a href="/" className="avatar" >
                    <img alt= "avatar" />

                </a>
                <div className="content">
                    <a href="/" className="author">
                        sam

                    </a>
                    <div className="metadata">
                        <span className="date">
                            today at 6:pm
                        </span>
                    </div>
                    <div className="text">nice blog post!</div>
                </div>

            </div>
        </div>
    );
};

reactdom.render( <
    app / > ,
    document.querySelector('#root')
);