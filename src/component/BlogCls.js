import React from 'react';
import Clock from "./Clock";
import CommentFn from './CommentFn'
import { blogSampleData } from './blogData'
export class BlogCls extends React.Component {

    render() {
        return <React.Fragment>
            <h1>This is class component and function component</h1>
            <Clock />
            <div>
                {
                    blogSampleData.blog.map((data, key) => {
                        return (
                            <div key={key}>
                                <b>{"Blog: " + (key + 1)}-></b> {data.title}{", "}{data.description}
                                <CommentFn blogId={data.id} />
                            </div>

                        );
                    })}
            </div>
        </React.Fragment>

    }

}