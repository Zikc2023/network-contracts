G --- General revert
S --- Staking relate revert

| Revert Code | Revert Message |
|----------|:-------------:|
| G001 | Caller should only be IndexerRegistry |
| G002 | Caller should only be Indexer |
| G003 | Caller should only be RewardsDistributer |
| G004 | Caller should only be Delegator |
| G005 | Caller should only be DisputeManager |
| G005 | Indexer is on dispute |
| S001 | Invaild unbondFeeRate |
| S002 | Reach delegation limitation |
| S003 | Invalid delegation amount |
| S004 | First staking not from indexer |
| S005 | Insufficient or invaild delegation amount to remove |
| S006 | Reach unbond requests limitation |
| S007 | Invaild unbondReqId to cancel |
| S008 | Insufficient unstake amount |
| S009 | No unbond request to widthdraw |
| S010 | Invaild amount to slash indexer |