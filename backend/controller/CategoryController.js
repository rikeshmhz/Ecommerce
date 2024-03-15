const Category = require('../model/CategoryModel')

exports.addtocategory = async (req, res) => {
    let category = await Category.findOne({category_name: req.body.category_name})       
    if (!category) {
        let categoryadd = new Category({
            category_name: req.body.category_name
        })
        categoryadd = await categoryadd.save()
        if (!categoryadd) {
            return res.status(400).json({ error: "Could not add category" })
        }
        return res.send(categoryadd)
    }
    return res.status(400).json({ error: "Category exists." })
}
exports.getalldetails = async (req, res) => {
    let category = await Category.find()
    if (!category) {
        return res.status(400).json({ err: "Something went wrong" })
    }
    return res.send(category)
}
exports.updatecategory = async (req, res) => {
    let updatecategory = await Category.findByIdAndUpdate(req.params.id, {
        category_name: req.body.category_name
    })
    if (!updatecategory) {
        return res.status(400).json({ error: "Something went Wrong" })
    }
    return res.send(updatecategory)
}
exports.deletecategory = async (req, res) => {
    let deletecategory = await Category.findByIdAndDelete(req.params.id)
    if (!deletecategory) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.json({ success: "Delete successfully" })
}
exports.getcategorydetail=async(req,res)=>{
    let category=await Category.findById(req.params.id)
    if(!category){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(category)
}

// req.body
// req.params
// req.query