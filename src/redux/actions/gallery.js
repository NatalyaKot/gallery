export const setGallery= (items) => ({
    type: 'SET_GALLERY',
    payload: items,
});

//эта функция setGallery , должна взять массив items и сделать объект
//этот объект type: 'SET_GALLERY' и получать payload: items,