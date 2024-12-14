const express = require('express');
const router = express.Router();

const providers = [
    {
        "cif": "12345",
        "name": "Proveedor A",
        "activity": "Suministros",
        "address": "Calle 123",
        "city": "Ciudad X",
        "cp": "28001",
        "phone": "123456789"
    }
];

router.get('/', (req, res) => {
    if (providers.length === 0) {
        return res.status(404).json({
            message: "No hay proveedores"
        });
    }

    return res.status(200).json({
        message: "Lista de proveedores",
        providers
    });
});

router.get('/:cif', (req, res) => {
    const urlCif = req.params.cif;
    const existingProvider = providers.find(p => p.cif === urlCif);

    if (!existingProvider) {
        return res.status(404).json({
            message: "Proveedor no encontrado"
        });
    }

    return res.status(200).json({
        message: "Proveedor encontrado",
        existingProvider
    });
});

router.post('/', (req, res) => {
    const { cif: cifBody } = req.body
    const cifInUse = providers.find(p => p.cif === cifBody);

    if (!cifBody) {
        return res.status(400).json({
            message: "El proveedor añadido debe incluir un CIF"
        });
    } else if (cifInUse) {
        return res.status(409).json({
            message: "Este CIF está siendo usado por otro proveedor"
        });
    }

    const newProvider = req.body;
    providers.push(newProvider);

    return res.status(201).json({
        message: "Proveedor creado",
        newProvider
    });
});

router.put('/:cif', (req, res) => {
    const urlCif = req.params.cif;
    const existingProvider = providers.find(p => p.cif === urlCif);

    if (!existingProvider) {
        return res.status(404).json({
            message: "Proveedor no encontrado"
        });
    }
    
    const cifInUse = providers.find(p => p.cif === req.body.cif && p.cif !== urlCif);
    if (cifInUse) {
        return res.status(409).json({
            message: "Este CIF está siendo usado por otro proveedor"
        });
    }

    const updatedProvider = req.body;
    const providerIndex = providers.indexOf(existingProvider);
    providers[providerIndex] = { ...existingProvider, ...updatedProvider };

    return res.status(200).json({
        message: "Proveedor actualizado",
        provider: providers[providerIndex]
    });
});

router.delete('/:cif', (req, res) => {
    const urlCif = req.params.cif;
    const existingProvider = providers.find(p => p.cif === urlCif);

    if (!existingProvider) {
        return res.status(404).json({
            message: "Proveedor no encontrado"
        });
    }

    providers.splice(providers.indexOf(existingProvider), 1);
    return res.status(200).json({
        message: "Proveedor eliminado",
        existingProvider
    });
});

module.exports = router;
