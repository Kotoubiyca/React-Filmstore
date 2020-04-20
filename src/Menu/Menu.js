import React from 'react';

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

    return (
        <nav>
            {menuList.map((item, key) => {
                return (
                    <button
                        key={key}
                        onClick={() => {
                            props.handleGetFilm(item.key)
                            props.setTitle(item.name)
                        }}>
                        {item.name}
                    </button>
                )
            })}
        </nav>
    )
}
