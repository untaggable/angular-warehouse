import { entitify } from '$routes-entity/helpers';
import { Entity } from '$routes-entity/entity';
import {
  RSEntityStructure,
  RSEntity,
  RSRoutes,
  RSRoutesEntity
} from '$routes-entity/interfaces';

export class RouteStore<C> {
  public get entity(): RSRoutesEntity<C> {
    return this._entity;
  }

  private _entity: RSRoutesEntity<C>;

  public static inject<C>(): RouteStore<C> {
    if (!RouteStore.inject['instance']) {
      RouteStore.inject['instance'] = new RouteStore<C>();
    }

    return RouteStore.inject['instance'];
  }

  public createRoot<T>(routes: RSRoutes<T>): RSEntity<T> {
    if (this._entity) {
      // TODO: rename route store
      throw `Route store is already created!`;
    }

    const rootEntity = entitify<T>(null, routes);

    this.initEntity();
    this.updateEntity('app', rootEntity);

    return rootEntity as RSEntity<T>;
  }

  public createFeature<T>(parentRoute: RSEntityStructure, routes: RSRoutes<T>): RSEntity<T> {
    const featureEntity = entitify<T>(parentRoute, routes);

    this.updateEntity<RSEntity<T>>(parentRoute.route, featureEntity);

    return featureEntity;
  }

  public getEntity(): RSRoutesEntity<C> {
    return this.entity;
  }

  private initEntity(): void {
    this._entity = {} as RSRoutesEntity<C>;
  }

  private updateEntity<T>(route: string, entity: T): void {
    this._entity = Object.assign(
        {},
        this._entity,
        { [route]: entity }
    );
  }
}

export const routeStore = RouteStore.inject<Entity>();
