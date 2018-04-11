import mongoose from 'mongoose';

import Config from '../models/config';

exports.getConfig = (req, res, next) => {
    Config.find()
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            config: docs.map(doc => {
                return {
                    _id: doc._id,
                    auto_IP : doc.auto_IP,
                    auto_DNS: doc.auto_DNS,
                    ip_address: doc.ip_address,
                    subnet_mask: doc.subnet_mask,
                    def_gateway: doc.def_gateway,
                    preffered_dns: doc.preffered_dns,
                    alternative_dns: doc.alternative_dns
                }
            })
        }

        res.status(200).json(response);
    })
}

exports.addConfig = (req, res, next) => {
    const config = new Config({
        _id: mongoose.Types.ObjectId(),
        auto_IP : req.body.auto_IP,
        auto_DNS: req.body.auto_DNS,
        ip_address: req.body.ip_address,
        subnet_mask: req.body.subnet_mask,
        def_gateway: req.body.def_gateway,
        preffered_dns: req.body.preffered_dns,
        alternative_dns: req.body.alternative_dns
    });
    console.log(config);
    config.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Config created',
            createConfig: {
                _id: result._id,
                auto_IP: result.auto_IP,
                auto_DNS: result.auto_DNS,
                ip_address: result.ip_address,
                subnet_mask: result.subnet_mask,
                def_gateway: result.def_gateway,
                preffered_dns: result.preffered_dns,
                alternative_dns: result.alternative_dns
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err.message
        });
    });
}