/* tslint:disable */
/* eslint-disable */
/**
 * APF.API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface AccessTokenResponse
 */
export interface AccessTokenResponse {
    /**
     * 
     * @type {string}
     * @memberof AccessTokenResponse
     */
    tokenType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccessTokenResponse
     */
    accessToken: string;
    /**
     * 
     * @type {number}
     * @memberof AccessTokenResponse
     */
    expiresIn: number;
    /**
     * 
     * @type {string}
     * @memberof AccessTokenResponse
     */
    refreshToken: string;
}
