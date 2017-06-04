import { IFeature } from './feature.interface';

export class FeatureModel implements IFeature {
    featureId: string;
    featureName: string;

    constructor(id, name) {
        this.featureId = id;
        this.featureName = name;
    }
}
