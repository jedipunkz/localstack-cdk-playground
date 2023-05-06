#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LocalStackVpcStack } from '../lib/vpc-stack';

const app = new cdk.App();
new LocalStackVpcStack(app, 'LocalStackVpcStack', {
  env: {
    region: 'us-west-2',
  },
});

