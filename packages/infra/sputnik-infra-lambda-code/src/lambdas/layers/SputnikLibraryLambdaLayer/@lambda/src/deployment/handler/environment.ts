export interface EnvironmentVariables {
	AWS_ACCOUNT: string
	AWS_REGION: string

	TABLE_DEVICES: string
	TABLE_DEVICE_TYPES: string
	TABLE_DEVICE_BLUEPRINTS: string
	TABLE_DEPLOYMENTS: string
	TABLE_SETTINGS: string
	IAM_ROLE_ARN_FOR_GREENGRASS_GROUPS: string
	IOT_POLICY_GREENGRASS_CORE: string
	DATA_BUCKET: string
	IOT_ENDPOINT: string
	DEFAULT_NAMESPACE: string
}