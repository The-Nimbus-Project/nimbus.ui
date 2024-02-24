import React from 'react';
import { Divider, HeaderSubheader, HeaderContent, Header, Icon, SemanticICONS } from 'semantic-ui-react';
import { OrderBy } from '../../../../utils/enums';
import { generateCards } from '../../../../utils/generateCards';
import { SortableItem } from '../../../../utils/interfaces';
import './CardSection.css';

interface CardSectionProps<T extends SortableItem> {
	items: T[];
	Component: React.ComponentType<{ item: T }>;
	sectionTitle: string;
	sectionIcon: SemanticICONS | string; // Directly use SemanticICONS or string if necessary
}

export const CardSection = <T extends SortableItem>({ items, Component, sectionTitle, sectionIcon }: CardSectionProps<T>) => {
	return (
		<div className='card-section-container'>
			<div className='card-section-header'>
				<Header as='h2' dividing>
					<Icon className='header-icon' name={sectionIcon as SemanticICONS} />
					<HeaderContent>
						Your {sectionTitle}
						<HeaderSubheader>Recently Used</HeaderSubheader>
					</HeaderContent>
				</Header>
			</div>
			<div className='card-container'>
				{ 
					generateCards(items, Component, OrderBy.Descending, true, 2)
				}
			</div>
			<Divider horizontal inverted>
				All {sectionTitle}
			</Divider>
			<div className='card-container'>
				{
					generateCards(items, Component, OrderBy.Ascending, false, 0)
				}
			</div>
		</div>
	);
};