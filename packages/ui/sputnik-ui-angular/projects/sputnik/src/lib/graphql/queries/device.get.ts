import gql from 'graphql-tag'

export default gql`
		query GetDevice($thingId: String!) {
				getDevice(thingId: $thingId) {
						thingId
						thingName
						thingArn
						name
						namespace
						deviceTypeId
						deviceBlueprintId
						certificateArn
						connectionState {
								state
								at
						}
						spec
						greengrassGroupId
						metadata
						lastDeploymentId
						createdAt
						updatedAt
				}
		}
`