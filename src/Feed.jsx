import React, { useState, useEffect } from "react";
import { Post } from "./Post";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    gridListTile: { overflow: "visible" }
});

export const Feed = props => {
    const classes = useStyles(props);
    const [posts, setPosts] = useState([]);

    useEffect(() => {}, []);

    return (
        <GridList cellHeight={200} cols={2} spacing={20}>
            {posts.map((post, index) => (
                <GridListTile
                    key={index}
                    cols={1}
                    rows={1}
                    classes={{ tile: classes.gridListTile }}
                >
                    <Post {...post} key={index} />
                </GridListTile>
            ))}
        </GridList>
    );
};