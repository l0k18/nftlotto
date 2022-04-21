package config

import (
	"github.com/l0k18/nftlotto/libs/log"
)

const (
	// DefaultLogLevel defines a default log level as INFO.
	DefaultLogLevel = "info"
)

// Config defines the top level configuration
type Config struct {
	// Top level options use an anonymous struct
	BaseConfig `mapstructure:",squash"`

	// Output level for logging
	LogLevel string `mapstructure:"log-level"`

	// Output format: 'plain' (colored text) or 'json'
	LogFormat string `mapstructure:"log-format"`
}

// DefaultConfig returns a default configuration
func DefaultConfig() *Config {
	return &Config{
		BaseConfig: DefaultBaseConfig(),
		LogLevel:   DefaultLogLevel,
		LogFormat:  log.LogFormatPlain,
	}
}

// TestConfig returns a configuration that can be used for testing
func TestConfig() *Config {
	return &Config{
		BaseConfig: TestBaseConfig(),
	}
}

// SetRoot sets the RootDir for all Config structs
func (cfg *Config) SetRoot(root string) *Config {
	cfg.BaseConfig.RootDir = root
	return cfg
}

// ValidateBasic performs basic validation (checking param bounds, etc.) and
// returns an error if any check fails.
func (cfg *Config) ValidateBasic() error {
	return nil
}

// -----------------------------------------------------------------------------
// BaseConfig

// BaseConfig defines the base configuration
type BaseConfig struct { // nolint: maligned
	// chainID is unexposed and immutable but here for convenience
	chainID string

	// The root directory for all data.
	// This should be set in viper so it can unmarshal into this struct
	RootDir string `mapstructure:"home"`

	// Output level for logging
	LogLevel string `mapstructure:"log-level"`

	// Output format: 'plain' (colored text) or 'json'
	LogFormat string `mapstructure:"log-format"`
}

// DefaultBaseConfig returns a default base configuration for a Tendermint node
func DefaultBaseConfig() BaseConfig {
	return BaseConfig{
		LogLevel:  DefaultLogLevel,
		LogFormat: log.LogFormatPlain,
	}
}

// TestBaseConfig returns a base configuration for testing a Tendermint node
func TestBaseConfig() BaseConfig {
	cfg := DefaultBaseConfig()
	cfg.chainID = "tendermint_test"
	return cfg
}

func (cfg BaseConfig) ChainID() string {
	return cfg.chainID
}
