/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Monitoring data for integration runtime node.
 *
 */
class IntegrationRuntimeNodeMonitoringData {
  /**
   * Create a IntegrationRuntimeNodeMonitoringData.
   * @member {string} [nodeName] Name of the integration runtime node.
   * @member {number} [availableMemoryInMB] Available memory (MB) on the
   * integration runtime node.
   * @member {number} [cpuUtilization] CPU percentage on the integration
   * runtime node.
   * @member {number} [concurrentJobsLimit] Maximum concurrent jobs on the
   * integration runtime node.
   * @member {number} [concurrentJobsRunning] The number of jobs currently
   * running on the integration runtime node.
   * @member {number} [maxConcurrentJobs] The maximum concurrent jobs in this
   * integration runtime.
   * @member {number} [sentBytes] Sent bytes on the integration runtime node.
   * @member {number} [receivedBytes] Received bytes on the integration runtime
   * node.
   */
  constructor() {
  }

  /**
   * Defines the metadata of IntegrationRuntimeNodeMonitoringData
   *
   * @returns {object} metadata of IntegrationRuntimeNodeMonitoringData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntegrationRuntimeNodeMonitoringData',
      type: {
        name: 'Composite',
        className: 'IntegrationRuntimeNodeMonitoringData',
        modelProperties: {
          nodeName: {
            required: false,
            readOnly: true,
            serializedName: 'nodeName',
            type: {
              name: 'String'
            }
          },
          availableMemoryInMB: {
            required: false,
            readOnly: true,
            serializedName: 'availableMemoryInMB',
            type: {
              name: 'Number'
            }
          },
          cpuUtilization: {
            required: false,
            readOnly: true,
            serializedName: 'cpuUtilization',
            type: {
              name: 'Number'
            }
          },
          concurrentJobsLimit: {
            required: false,
            readOnly: true,
            serializedName: 'concurrentJobsLimit',
            type: {
              name: 'Number'
            }
          },
          concurrentJobsRunning: {
            required: false,
            readOnly: true,
            serializedName: 'concurrentJobsRunning',
            type: {
              name: 'Number'
            }
          },
          maxConcurrentJobs: {
            required: false,
            readOnly: true,
            serializedName: 'maxConcurrentJobs',
            type: {
              name: 'Number'
            }
          },
          sentBytes: {
            required: false,
            readOnly: true,
            serializedName: 'sentBytes',
            type: {
              name: 'Number'
            }
          },
          receivedBytes: {
            required: false,
            readOnly: true,
            serializedName: 'receivedBytes',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = IntegrationRuntimeNodeMonitoringData;