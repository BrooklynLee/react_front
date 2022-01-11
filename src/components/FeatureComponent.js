import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Link } from 'react-router-dom';

function FeatureComponent(props) {
    return (
        <TableRow key={props.id}>
            <TableCell>{props.id}</TableCell>
            <TableCell>{props.feature_type.type_name}</TableCell>
            <TableCell><Link to={`/features/${props.id}`}>{props.name}</Link></TableCell>
            <TableCell>{props.link}</TableCell>
            <TableCell>{props.tag.map(item => {
                return (
                    < div className="row" >
                        <Link to={`/search?tag=${item.id}`}>{item.name}</Link>
                        {/* <a className="col-sm-2">{item.name}</a> */}
                    </div>
                )
            })}</TableCell>
        </TableRow >
    );
}


export default FeatureComponent;
