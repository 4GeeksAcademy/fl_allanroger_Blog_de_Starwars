// VehicleDetail.js
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "react";

const VehicleDetail = () => {
    const params = useParams();
    const { actions, store } = useContext(Context);
    
    useEffect(() => {
        actions.getVehicle(params.vehicleId);
    }, [params.vehicleId]);

    return (
        <div className="container">
            <div className="card mb-3" style={{ width: "100%" }}>
                {store.vehicle?.result.uid === params.vehicleId ? (
                    <div className="row g-0">
                        <div className="col-md-4">
                            {/* Adicione a lógica para exibir a imagem do veículo, se disponível */}
                            <img src={""} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{store.vehicle.result.properties.name}</h1>
                                <p className="card-text">Model: {store.vehicle.result.properties.model}</p>
                                <p className="card-text">Vehicle Class: {store.vehicle.result.properties.vehicle_class}</p>
                                {/* Adicione outros detalhes do veículo conforme necessário */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default VehicleDetail;
