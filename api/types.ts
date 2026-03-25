// types.ts

export type AWSRegion =
  | 'us-east-1'
  | 'us-east-2'
  | 'us-west-1'
  | 'us-west-2'
  | 'af-south-1'
  | 'ap-east-1'
  | 'ap-northeast-1'
  | 'ap-northeast-2'
  | 'ap-northeast-3'
  | 'ap-south-1'
  | 'ap-south-2'
  | 'ap-southeast-1'
  | 'ap-southeast-2'
  | 'ap-southeast-3'
  | 'ap-southeast-4'
  | 'ca-central-1'
  | 'eu-central-1'
  | 'eu-north-1'
  | 'eu-south-1'
  | 'eu-south-2'
  | 'eu-west-1'
  | 'eu-west-2'
  | 'eu-west-3'
  | 'il-central-1'
  | 'me-central-1'
  | 'me-south-1'
  | 'sa-east-1'
  | 'us-gov-east-1'
  | 'us-gov-west-1';

export interface EC2Instance {
  InstanceId: string;
  InstanceType: string;
  LaunchTime: Date;
  State: {
    Code: number;
    Name: string;
  };
  Tags?: {
    Key: string;
    Value: string;
  }[];
  PublicIpAddress?: string;
  PrivateIpAddress?: string;
  Placement?: {
    AvailabilityZone: string;
  };
}

export interface S3Bucket {
  Name: string;
  CreationDate: Date;
}

export interface LambdaFunction {
  FunctionName: string;
  FunctionArn: string;
  Runtime: string;
  Handler: string;
  Role: string;
  Description?: string;
  Timeout: number;
  MemorySize: number;
  LastModified: string;
  CodeSize: number;
}

export interface CloudFormationStack {
  StackName: string;
  StackId: string;
  CreationTime: Date;
  StackStatus: string;
  Description?: string;
  Outputs?: {
    OutputKey: string;
    OutputValue: string;
    Description?: string;
  }[];
  Parameters?: {
    ParameterKey: string;
    ParameterValue: string;
  }[];
}

export interface AWSCredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
  region: AWSRegion;
}

export interface CommandResult {
    success: boolean;
    message: string;
    data?: any;
}

export interface DeploymentConfig {
    environment: string;
    region: AWSRegion;
    version: string;
    artifactBucket: string;
    artifactKey: string;
    stackName: string;
    templatePath: string;
    parameters?: {[key: string]: string};
}