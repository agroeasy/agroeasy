export default {
    imageCreate: async (req, res) => {
        try {
            //console.log(req.file); // to see what is returned to you
            const { public_id, url } = await req.file;

            const imageData = {
                imageId: public_id,
                imageUrl: url,
            };
            
            return res.send({ data: imageData, success: true });
        } catch (err) {
            res.send({ err, success: false });
        }
    },
};
