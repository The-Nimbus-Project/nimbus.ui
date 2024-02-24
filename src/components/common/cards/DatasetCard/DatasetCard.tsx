import React from 'react';
import { Image, Card, CardContent, CardHeader, CardMeta, CardDescription } from 'semantic-ui-react';
import { IDataset } from '../../../../models/Dataset';
import logo from '../../../../assets/nimbusLogo.png';
import './DatasetCard.css';

interface IDatasetCardProps {
    item: IDataset;
}

export const DatasetCard: React.FC<IDatasetCardProps> = ({ item }) => {
    return (
        <Card>
            <Image className='dataset-card-image' src={logo} wrapped ui={false} />
            <CardContent>
                <CardHeader>{item.name}</CardHeader>
                <CardMeta>
                    <span className='date'>Last access: {item.lastAccess.toLocaleDateString()}</span>
                </CardMeta>
                <CardDescription>
                    {item.totalRecords} Total Records
                </CardDescription>
            </CardContent>
        </Card>
    );
};

