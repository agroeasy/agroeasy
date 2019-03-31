import models from '../../db/models/';

const { ProductImage } = models;

export default {
    imageCreate: async (req, res) => {
        try {
            //console.log(req.file); // to see what is returned to you
            const { public_id, url } = await req.file;

            const imageData = {
                image_id: public_id,
                image_url: url,
            };

            const image = new ProductImage(imageData);

            await image.save(); // save image information in database
            
            return res.send({ data: image, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },

    // deletes products using id
    imageDelete: async (req, res) => {
    },

    // updates products using id
    imageUpdate: async (req, res) => {
    },
};
