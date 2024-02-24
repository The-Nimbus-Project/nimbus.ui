import React from 'react';
import { Divider, HeaderSubheader, HeaderContent, Header, Icon } from 'semantic-ui-react';
import { OrderBy } from './../../utils/enums';
import { Dataset } from '../../models/Dataset';
import { DatasetCard } from '../../components/common/cards/DatasetCard/DatasetCard';
import './HomePage.css';

const HomePage: React.FC = () => {
	
	//later to be an api call mapped to a dataset model
	const datasets: Dataset[] = [
		{ id: 1, name: "Dataset 1", lastAccess: new Date('08/24/2023'), totalRecords: 215015 },
		{ id: 1, name: "Dataset 1", lastAccess: new Date('08/24/2023'), totalRecords: 215015 },
		{ id: 2, name: "Dataset 2", lastAccess: new Date('11/29/2023'), totalRecords: 57215 },
		{ id: 3, name: "Dataset 3", lastAccess: new Date("01/15/2024"), totalRecords: 2150 },
		{ id: 4, name: "Dataset 4", lastAccess: new Date("02/16/2024"), totalRecords: 215 },
		{ id: 5, name: "Dataset 5", lastAccess: new Date("02/21/2024"), totalRecords: 5215 },
		{ id: 6, name: "Dataset 6", lastAccess: new Date("02/23/2024"), totalRecords: 1300215 }
	];  

	const getDatasetCards = (order: OrderBy, useLimit: boolean, limitAmount: number) : any => {
		const relevantDatasets: Dataset[] = [...datasets];

		switch(order)
		{
			case OrderBy.Ascending:
				relevantDatasets.sort((a, b) => b.lastAccess.getTime() + a.lastAccess.getTime());
				break;

			case OrderBy.Descending:
				relevantDatasets.sort((a, b) => b.lastAccess.getTime() - a.lastAccess.getTime());
				break;

			default:
				break;
		}

		if (!useLimit) {
			return relevantDatasets.map((dataset: Dataset) => {
				return <DatasetCard dataset={dataset} />
			})
		} else {
			return relevantDatasets.map((dataset: Dataset, index: number) => {
				if (index > limitAmount) {
					return null;
				} else {
					return <DatasetCard dataset={dataset} />
				}
			});
		}
	}
	
	return (
		<div className='homepage-container'>
			<div className='homepage-header'>
				<Header as='h2' dividing>
					<Icon className='header-icon' name='cloud' />
					<HeaderContent>
					Your Datasets
					<HeaderSubheader>Frequent Use</HeaderSubheader>
					</HeaderContent>
				</Header>
			</div>
			<div className='homepage-card-container'>
				{ 
					getDatasetCards(OrderBy.Descending, true, 3)
				}
			</div>
			<Divider horizontal inverted>
				All Datasets
			</Divider>
			<div className='homepage-card-container'>
				{
					getDatasetCards(OrderBy.Ascending, false, 0)
				}
			</div>
		</div>
	);
};

export default HomePage;