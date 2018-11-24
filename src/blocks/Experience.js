import React from 'react'
import { Grid, GridRow } from 'semantic-ui-react'

const Experience = ({items}) => (
  <div>
      <Grid>
{
    items.map(
        (item, index)=>(
            <Grid.Column>
                <Grid.Row>
                {item.title}
                </Grid.Row>
                <Grid.Row>
                {item.description}
            </Grid.Row>
            <Grid.Row>
                {item.from}
            </Grid.Row>
            <GridRow>
                {item.to}
            </GridRow>
            </Grid.Column>    
        )
    )
}
      </Grid>
  </div> 
)

export default Experience
