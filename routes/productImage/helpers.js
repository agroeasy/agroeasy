export default {
    imageCreate: async (req, res) => {
        try {
            //console.log(req.file); // to see what is returned to you
            const { public_id, url } = await req.file;

            const imageData = {
                image_id: public_id,
                image_url: url,
            };
            
            return res.send({ data: imageData, success: true });
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
