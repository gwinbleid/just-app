import mongoose from 'mongoose';

const configSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    auto_IP: Boolean,
    auto_DNS: Boolean,

    ip_address: String,
    subnet_mask: String,
    def_gateway: String,
    preffered_dns: String,
    alternative_dns: String,
})

export default mongoose.model('Config', configSchema);