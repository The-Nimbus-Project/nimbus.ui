import React from 'react';
import { Image, Card, CardContent, CardHeader, CardMeta, CardDescription } from 'semantic-ui-react';
import { IDataset } from '../../../../models/Dataset';
import logo from '../../../../assets/nimbusLogo.png';

interface IDatasetCardProps {
    dataset: IDataset;
}

export const DatasetCard: React.FC<IDatasetCardProps> = ({ dataset }) => {
    return (
        <Card>
            <Image src={logo} wrapped ui={false} />
            <CardContent>
                <CardHeader>{dataset.name}</CardHeader>
                <CardMeta>
                    <span className='date'>Last access: {dataset.lastAccess.toLocaleDateString()}</span>
                </CardMeta>
                <CardDescription>
                    {dataset.totalRecords} Total Records
                </CardDescription>
            </CardContent>
        </Card>
    );
};

