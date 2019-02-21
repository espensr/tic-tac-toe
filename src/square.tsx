import React, { Component, ReactNode } from 'react';
import { squareProps } from './models';
import Grid from '@material-ui/core/Grid';

export function Square(props: squareProps) {
    return (
        <Grid 
            item xs={3} sm={2}
        >
            <div 
                onClick={props.onClick}
                className="square">
                    {props.value}
            </div>
        </Grid>
    );
}