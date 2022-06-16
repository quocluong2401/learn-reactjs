import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList =  [
        {
            id:1,
            name:'Rap Việt cực chất',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/0/0/9/50094605dd9408b52d040c7ae2413e1d.jpg'
        },
        {
            id:2,
            name:'Latin hit mix',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/2/5/e/b25e2f2f88d930ed9e7773076fc5070a.jpg'
        },
        {
            id:3,
            name:'Edm Now',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/f/7/9/cf792cd8af1072cd82223d11cb9d1853.jpg'
        },
        {
            id:4,
            name:'V-Weekend',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/5/0/3/95038128e86e9180424f30ad8953aec8.jpg'
        },
        {
            id:5,
            name:'K-pop Newbie',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/b/1/1/ab11d76a5392353b9ba1de93bcdeb7e6.jpg    '
        }
    ]
    return (
        <div>
            <h3>Có thể bạn sẽ thấy</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;