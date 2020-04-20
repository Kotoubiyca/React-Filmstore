import React from 'react';
import { Button } from '@material-ui/core';

export const Menu = (props) => {
    const menuList = [
        {
            name: 'Now Playing',
            key: 'now_playing'
        },
        {
            name: 'Top Rated',
            key: 'top_rated'
        },
        {
            name: 'Popular',
            key: 'popular'
        },
        {
            name: 'Upcoming',
            key: 'upcoming'
        }
    ]
    const btnStyle = {
        padding:' 0 16px',
        lineHeight: '36px',
        color: 'white',
        textTransform: 'none'
    }

    return (
        <nav>
            {menuList.map((item, key) => {
                return (
                    <Button
                        style={btnStyle}
                        key={key}
                        onClick={() => {
                            props.handleGetFilm(item.key)
                            props.setTitle(item.name)
                        }}>
                        {item.name}
                    </Button>
                )
            })}
        </nav>
    )
}
