#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { StaticSite } from "../lib/static-site";

class CustomStaticSiteStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string) {
    super(parent, name);

    new StaticSite(this, "nodejsReactShopStaticSite");
  }
}

const app = new cdk.App();

new CustomStaticSiteStack(app, "customStaticSiteStack");

app.synth();
